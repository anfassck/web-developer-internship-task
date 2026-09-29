/**
 * NovaHire Technologies — Contact Page Script
 * Handles contact form validation and success state.
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  /* Clear errors on input */
  form.querySelectorAll(".form-input, .form-textarea").forEach((el) => {
    el.addEventListener("input", () => {
      el.classList.remove("error");
      const errorEl = document.getElementById(`${el.id}-error`);
      if (errorEl) errorEl.classList.remove("visible");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateContactForm()) {
      showContactSuccess();
    }
  });
}

function validateContactForm() {
  let isValid = true;

  /* Name */
  const name = document.getElementById("contact-name");
  if (!name.value.trim() || name.value.trim().length < 2) {
    showFieldError("contact-name", "contact-name-error");
    isValid = false;
  }

  /* Email */
  const email = document.getElementById("contact-email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    showFieldError("contact-email", "contact-email-error");
    isValid = false;
  }

  /* Subject */
  const subject = document.getElementById("contact-subject");
  if (!subject.value.trim()) {
    showFieldError("contact-subject", "contact-subject-error");
    isValid = false;
  }

  /* Message */
  const message = document.getElementById("contact-message");
  if (!message.value.trim() || message.value.trim().length < 10) {
    showFieldError("contact-message", "contact-message-error");
    isValid = false;
  }

  /* Scroll to first error */
  if (!isValid) {
    const firstError = document.querySelector(".form-input.error, .form-textarea.error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return isValid;
}

function showFieldError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add("error");
  if (error) error.classList.add("visible");
}

function showContactSuccess() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  const wrapper = form.parentElement;
  const heading = wrapper ? wrapper.querySelector(".text-center") : null;

  form.style.display = "none";
  if (heading) heading.style.display = "none";
  success.classList.add("visible");
  success.scrollIntoView({ behavior: "smooth", block: "start" });
}
