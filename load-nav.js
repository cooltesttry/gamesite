document.addEventListener("DOMContentLoaded", function() {
    const topNav = document.getElementById("top-nav");
    if (!topNav) return;
  
    // 假设当前页面与 nav.html 关系: ../common/nav.html
    // 也可以写绝对路径 /common/nav.html
    const navUrl = "../common/nav.html";
  
    fetch(navUrl)
      .then(res => {
        if (!res.ok) throw new Error("Failed to load nav.html");
        return res.text();
      })
      .then(html => {
        topNav.innerHTML = html;
      })
      .catch(err => {
        console.error(err);
        topNav.innerHTML = '<div style="background:#c00;color:#fff;">Error loading nav</div>';
      });
  });