(function () {
  "use strict";

  var CHECK_PREFIX = "APP_SLUG-handbook:checklist:";

  function storageGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (err) {
      // 如果浏览器禁用 localStorage，只影响持久化，不影响本次交互。
    }
  }

  function storageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (err) {
      // ignore
    }
  }

  function setupChecklists() {
    var lists = document.querySelectorAll("[data-checklist]");
    lists.forEach(function (list) {
      var id = list.getAttribute("data-checklist");
      var storageKey = CHECK_PREFIX + id;
      var saved = storageGet(storageKey);
      var checked = new Set();
      if (saved) {
        try {
          JSON.parse(saved).forEach(function (v) { checked.add(v); });
        } catch (err) {
          checked = new Set();
        }
      }

      list.querySelectorAll("input[type=checkbox][data-check]").forEach(function (input) {
        var value = input.getAttribute("data-check");
        if (checked.has(value)) {
          input.checked = true;
        }
        input.addEventListener("change", function () {
          var next = new Set();
          list.querySelectorAll("input[type=checkbox][data-check]:checked").forEach(function (item) {
            next.add(item.getAttribute("data-check"));
          });
          storageSet(storageKey, JSON.stringify(Array.from(next)));
        });
      });
    });

    document.querySelectorAll("[data-clear-list]").forEach(function (button) {
      button.addEventListener("click", function () {
        var id = button.getAttribute("data-clear-list");
        var list = document.querySelector('[data-checklist="' + id + '"]');
        if (!list) {
          return;
        }
        if (!window.confirm("确定清空这份清单的勾选状态吗？清空后不可恢复。")) {
          return;
        }
        storageRemove(CHECK_PREFIX + id);
        list.querySelectorAll("input[type=checkbox][data-check]").forEach(function (input) {
          input.checked = false;
        });
      });
    });
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      document.body.removeChild(textarea);
      if (ok) {
        resolve();
      } else {
        reject(new Error("copy failed"));
      }
    });
  }

  function setupCopyButtons() {
    document.addEventListener("click", function (event) {
      var button = event.target.closest("[data-copy]");
      if (!button) {
        return;
      }
      var block = button.closest(".prompt");
      var pre = block && block.querySelector("pre");
      if (!pre) {
        return;
      }
      copyText(pre.innerText).then(function () {
        var old = button.textContent;
        button.textContent = "已复制";
        window.setTimeout(function () {
          button.textContent = old;
        }, 1400);
      }).catch(function () {
        var old = button.textContent;
        button.textContent = "复制失败，请手动选择";
        window.setTimeout(function () {
          button.textContent = old;
        }, 1600);
      });
    });
  }

  function setupExternalSmooth() {
    // 所有内部链接保持普通跳转即可；这里只处理同页锚点。
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (event) {
        var target = document.querySelector(link.getAttribute("href"));
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  setupChecklists();
  setupCopyButtons();
  setupExternalSmooth();
})();
