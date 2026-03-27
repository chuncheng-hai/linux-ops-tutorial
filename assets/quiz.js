(function () {
  const quizBank = {
    "c1-1-history": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "关于 Linux 与 GNU/Linux，下列哪些说法是正确的？",
          options: [
            "Linux 严格来说通常指操作系统内核",
            "常见发行版包括 CentOS、Ubuntu、Debian",
            "Linux 从一开始就是完整发行版，不依赖其他工具链",
            "GNU 工具与 Linux 内核结合后可形成 GNU/Linux 系统"
          ],
          answers: [0, 1, 3],
          explanation: "Linux 常指内核，发行版通常由内核加 GNU 工具、包管理与系统配置共同组成。"
        },
        {
          type: "boolean",
          prompt: "判断：CentOS、Ubuntu 这类发行版比单独学习 Linux 内核更贴近日常运维实践。",
          answer: true,
          explanation: "运维工作通常直接面对发行版环境、软件包、服务管理与系统配置。"
        }
      ]
    },
    "c1-2-commands": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "下面哪些命令或写法能帮助我们排查和使用基础命令？",
          options: [
            "type echo",
            "which ls",
            "echo $?",
            "md5sum file.txt"
          ],
          answers: [0, 1, 2, 3],
          explanation: "`type` 可判断命令类型，`which` 查路径，`echo $?` 看返回码，`md5sum` 可校验文件。"
        },
        {
          type: "boolean",
          prompt: "判断：`> access.log` 会清空文件内容，但不会删除这个文件。",
          answer: true,
          explanation: "这是重定向覆盖写入的效果，常用于快速清空日志文件内容。"
        }
      ]
    },
    "c1-3-filesystem": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "根据 FHS 和本节内容，下列目录与用途对应正确的是哪些？",
          options: [
            "/etc 用于放配置文件",
            "/tmp 常用于临时文件",
            "/home 通常是用户家目录",
            "/var 一般放变化中的数据和日志"
          ],
          answers: [0, 1, 2, 3],
          explanation: "这些都是 Linux 文件系统层次结构中的常见约定。"
        },
        {
          type: "boolean",
          prompt: "判断：`chmod -R 777 /` 是推荐的权限修复命令，可以快速解决大多数线上权限问题。",
          answer: false,
          explanation: "这是高风险操作，会破坏系统权限模型，严重时甚至导致系统不可用。"
        }
      ]
    },
    "c1-4-runlevel": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "在现代 Linux 发行版中，和系统启动与服务管理直接相关的常见命令有哪些？",
          options: [
            "systemctl start 服务名",
            "systemctl status 服务名",
            "systemctl enable 服务名 --now",
            "systemctl daemon-reload"
          ],
          answers: [0, 1, 2, 3],
          explanation: "本教程在运行级别附近已经引出了 systemd 相关服务管理命令。"
        },
        {
          type: "boolean",
          prompt: "判断：现代 Linux 中常用 `systemd` 管理服务，因此学习运行级别时也需要理解服务启动方式。",
          answer: true,
          explanation: "实际环境里，运行级别/启动目标与 systemd 服务管理通常是连在一起理解的。"
        }
      ]
    },
    "c1-5-install": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "下列哪些属于 Linux 下常见的软件安装方式？",
          options: [
            "使用操作系统包管理器安装",
            "源码编译安装",
            "基于本地 ISO 构建软件仓库后安装",
            "只复制一个二进制文件就等同于完成所有依赖安装"
          ],
          answers: [0, 1, 2],
          explanation: "包管理器、源码编译和本地仓库都很常见；依赖通常仍需显式处理。"
        },
        {
          type: "boolean",
          prompt: "判断：在 Linux 中安装软件时，依赖关系通常是需要重点关注的问题。",
          answer: true,
          explanation: "无论是 RPM/DEB 包还是源码编译，依赖问题都是常见安装难点。"
        }
      ]
    },
    "c2-1-branch": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "关于 Shell 脚本基础，下列哪些说法是正确的？",
          options: [
            "脚本首行常用 shebang 指定解释器",
            "`sh -n` 可以用于检查脚本语法",
            "`set -x` 可以帮助观察脚本执行过程",
            "Shell 脚本属于解释型脚本语言的一种常见用法"
          ],
          answers: [0, 1, 2, 3],
          explanation: "这些都是本章前半部分介绍的 Shell 基础能力。"
        },
        {
          type: "boolean",
          prompt: "判断：Shell 脚本开头的 `#!/usr/bin/env bash` 用来声明脚本应由哪个解释器执行。",
          answer: true,
          explanation: "shebang 是脚本执行入口的重要约定。"
        }
      ]
    },
    "c2-2-loop": {
      title: "本节练习",
      questions: [
        {
          type: "multiple",
          prompt: "关于 Shell 循环结构，下列哪些属于本节出现过的循环形式或写法？",
          options: [
            "for 循环",
            "while 循环",
            "while IFS= read -r line; do ... done < file",
            "switch 循环"
          ],
          answers: [0, 1, 2],
          explanation: "本节明确提到了 `for`、`while`，以及逐行读取文件的 `while read` 写法。"
        },
        {
          type: "boolean",
          prompt: "判断：`while IFS= read -r line` 是 Shell 中较常见的安全逐行读取文件方式。",
          answer: true,
          explanation: "这种写法能较好保留原始行内容，避免不必要的转义和裁剪问题。"
        }
      ]
    }
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalizeAnswers(answers) {
    return answers.slice().sort((a, b) => a - b).join(",");
  }

  function renderQuestion(question, index, blockId) {
    const inputType = question.type === "multiple" ? "checkbox" : "radio";
    const answerTypeLabel = question.type === "multiple" ? "多选题" : "判断题";
    const options = question.type === "boolean" ? ["正确", "错误"] : question.options;
    const name = `quiz-${blockId}-${index}`;

    return `
      <section class="quiz-question" data-question-index="${index}">
        <h4>${index + 1}. ${escapeHtml(answerTypeLabel)}：${escapeHtml(question.prompt)}</h4>
        <div class="quiz-options">
          ${options.map(function (option, optionIndex) {
            const optionLabel = question.type === "multiple"
              ? String.fromCharCode(65 + optionIndex) + ". "
              : "";
            return `
              <label class="quiz-option">
                <input type="${inputType}" name="${escapeHtml(name)}" value="${optionIndex}">
                <span>${escapeHtml(optionLabel + option)}</span>
              </label>
            `;
          }).join("")}
        </div>
        <div class="quiz-feedback" hidden></div>
      </section>
    `;
  }

  function getExpected(question) {
    if (question.type === "boolean") {
      return question.answer ? "0" : "1";
    }
    return normalizeAnswers(question.answers);
  }

  function getSelected(questionEl, question) {
    const checked = Array.from(questionEl.querySelectorAll("input:checked")).map(function (input) {
      return Number(input.value);
    });
    if (question.type === "boolean") {
      return checked.length ? String(checked[0]) : "";
    }
    return normalizeAnswers(checked);
  }

  function judgeQuestion(questionEl, question) {
    const feedbackEl = questionEl.querySelector(".quiz-feedback");
    const selected = getSelected(questionEl, question);
    const expected = getExpected(question);

    if (!selected) {
      feedbackEl.hidden = false;
      feedbackEl.className = "quiz-feedback incorrect";
      feedbackEl.innerHTML = "请先选择答案后再提交。";
      return false;
    }

    const isCorrect = selected === expected;
    feedbackEl.hidden = false;
    feedbackEl.className = "quiz-feedback " + (isCorrect ? "correct" : "incorrect");
    feedbackEl.innerHTML = (isCorrect ? "回答正确。" : "回答不正确。") +
      `<div class="quiz-explanation">${escapeHtml(question.explanation)}</div>`;
    return isCorrect;
  }

  function mountQuizBlock(block) {
    const quizId = block.getAttribute("data-quiz-id");
    const quiz = quizBank[quizId];

    if (!quiz) {
      block.classList.add("is-missing");
      block.innerHTML = "<p>该小节题目暂未配置。</p>";
      return;
    }

    block.innerHTML = `
      <div class="quiz-title">${escapeHtml(quiz.title)}</div>
      <p class="quiz-hint">每个小节包含 1 道多选题和 1 道判断题，点击“提交答案”即可即时判题。</p>
      ${quiz.questions.map(function (question, index) {
        return renderQuestion(question, index, quizId);
      }).join("")}
      <div class="quiz-actions">
        <button type="button" class="quiz-button primary" data-role="submit">提交答案</button>
        <button type="button" class="quiz-button secondary" data-role="reset">重新作答</button>
      </div>
    `;

    block.querySelector('[data-role="submit"]').addEventListener("click", function () {
      const questionEls = Array.from(block.querySelectorAll(".quiz-question"));
      let correctCount = 0;
      questionEls.forEach(function (questionEl, index) {
        if (judgeQuestion(questionEl, quiz.questions[index])) {
          correctCount += 1;
        }
      });
      const titleEl = block.querySelector(".quiz-title");
      titleEl.textContent = `${quiz.title}（答对 ${correctCount}/${quiz.questions.length} 题）`;
    });

    block.querySelector('[data-role="reset"]').addEventListener("click", function () {
      block.querySelectorAll("input").forEach(function (input) {
        input.checked = false;
      });
      block.querySelectorAll(".quiz-feedback").forEach(function (feedbackEl) {
        feedbackEl.hidden = true;
        feedbackEl.textContent = "";
        feedbackEl.className = "quiz-feedback";
      });
      block.querySelector(".quiz-title").textContent = quiz.title;
    });
  }

  function mountAllQuizBlocks() {
    document.querySelectorAll(".quiz-block[data-quiz-id]").forEach(mountQuizBlock);
  }

  if (window.$docsify) {
    const previous = window.$docsify.plugins || [];
    window.$docsify.plugins = previous.concat(function (hook) {
      hook.doneEach(function () {
        mountAllQuizBlocks();
      });
    });
  } else {
    document.addEventListener("DOMContentLoaded", mountAllQuizBlocks);
  }
})();
