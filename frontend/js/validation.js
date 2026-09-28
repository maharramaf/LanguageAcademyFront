// 09. Forms
function initForms() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rememberKey = "novalingua-remember-email";

  function fieldOf(form, name) {
    return form.querySelector('[name="' + name + '"]');
  }

  function setError(form, name, message) {
    const input = fieldOf(form, name);
    const error = form.querySelector('[data-error-for="' + name + '"]');
    const field = input ? input.closest(".field") : null;
    if (field) field.classList.toggle("has-error", Boolean(message));
    if (error) error.textContent = message || "";
    return !message;
  }

  function required(form, name, label) {
    const value = (fieldOf(form, name)?.value || "").trim();
    if (!value) return setError(form, name, label + " is required.");
    return setError(form, name, "");
  }

  function validateEmail(form, name) {
    const value = (fieldOf(form, name)?.value || "").trim();
    if (!value) return setError(form, name, "Email is required.");
    if (!emailPattern.test(value)) return setError(form, name, "Enter a valid email address.");
    return setError(form, name, "");
  }

  function validatePhone(form, name) {
    const value = (fieldOf(form, name)?.value || "").trim();
    const digits = value.replace(/\D/g, "");
    if (!value) return setError(form, name, "Phone is required.");
    if (digits.length < 7) return setError(form, name, "Enter a valid phone number.");
    return setError(form, name, "");
  }

  function validatePassword(form, name) {
    const value = fieldOf(form, name)?.value || "";
    if (!value) return setError(form, name, "Password is required.");
    if (value.length < 8) return setError(form, name, "Use at least 8 characters.");
    return setError(form, name, "");
  }

  function showSuccess(form) {
    const success = form.querySelector(".form-success");
    form.querySelectorAll(".field, .form-row, .form-row-between, .btn, .form-note").forEach(function (node) {
      if (success && success.contains(node)) return;
      node.hidden = true;
    });
    if (success) success.hidden = false;
  }

  document.querySelectorAll("[data-password-toggle]").forEach(function (button) {
    button.addEventListener("click", function () {
      const input = button.parentElement.querySelector("input");
      const icon = button.querySelector("i");
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      icon.className = show ? "bi bi-eye-slash" : "bi bi-eye";
      button.setAttribute("aria-label", show ? "Hide password" : "Show password");
    });
  });

  const loginForm = document.querySelector('[data-form="login"]');
  if (loginForm) {
    const saved = localStorage.getItem(rememberKey);
    if (saved) {
      const email = fieldOf(loginForm, "email");
      const remember = fieldOf(loginForm, "remember");
      if (email) email.value = saved;
      if (remember) remember.checked = true;
    }

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const emailOk = validateEmail(loginForm, "email");
      const passwordOk = validatePassword(loginForm, "password");
      if (!emailOk || !passwordOk) return;
      const remember = fieldOf(loginForm, "remember");
      if (remember?.checked) localStorage.setItem(rememberKey, fieldOf(loginForm, "email").value.trim());
      else localStorage.removeItem(rememberKey);
      window.location.href = "dashboard.html";
    });
  }

  const registerForm = document.querySelector('[data-form="register"]');
  registerForm?.addEventListener("submit", function (event) {
    event.preventDefault();
    const checks = [
      required(registerForm, "firstName", "First name"),
      required(registerForm, "lastName", "Last name"),
      validateEmail(registerForm, "email"),
      validatePhone(registerForm, "phone"),
      validatePassword(registerForm, "password")
    ];
    const password = fieldOf(registerForm, "password")?.value || "";
    const confirm = fieldOf(registerForm, "confirm")?.value || "";
    if (!confirm) checks.push(setError(registerForm, "confirm", "Confirm your password."));
    else if (confirm !== password) checks.push(setError(registerForm, "confirm", "Passwords do not match."));
    else checks.push(setError(registerForm, "confirm", ""));
    if (checks.every(Boolean)) showSuccess(registerForm);
  });

  document.querySelectorAll('[data-form="contact"]').forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const checks = [
        required(form, "name", "Name"),
        validateEmail(form, "email"),
        validatePhone(form, "phone"),
        required(form, "subject", "Subject"),
        required(form, "message", "Message")
      ];
      const message = (fieldOf(form, "message")?.value || "").trim();
      if (message && message.length < 10) {
        checks[4] = setError(form, "message", "Please write at least 10 characters.");
      }
      if (checks.every(Boolean)) showSuccess(form);
    });
  });

  document.querySelectorAll('[data-form="enroll"], [data-form="forgot"], [data-form="profile"]').forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const checks = [];
      if (fieldOf(form, "name")) checks.push(required(form, "name", "Name"));
      if (fieldOf(form, "email")) checks.push(validateEmail(form, "email"));
      if (fieldOf(form, "phone")) checks.push(validatePhone(form, "phone"));
      if (fieldOf(form, "bio")) checks.push(required(form, "bio", "Bio"));
      if (checks.every(Boolean)) showSuccess(form);
    });
  });
}
