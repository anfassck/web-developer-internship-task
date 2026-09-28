/**
 * NovaHire Technologies — Apply Page Script
 * Handles URL query parameter reading, form validation, file upload, and success state.
 */

document.addEventListener("DOMContentLoaded", () => {
  initApplyPage();
});

function initApplyPage() {
  loadJobFromURL();
  initFileUpload();
  initFormValidation();
}

/* ── Read job from URL query parameter ── */
function loadJobFromURL() {
  const params = new URLSearchParams(window.location.search);
  const jobId = params.get("job");
  const banner = document.getElementById("apply-job-banner");
  const titleEl = document.getElementById("apply-job-title");

  if (!jobId || !banner || !titleEl) return;

  const job = JOBS.find((j) => j.id === jobId);

  if (job) {
    titleEl.textContent = job.title;
    banner.style.display = "flex";
    document.title = `Apply for ${job.title} — NovaHire Technologies`;
  }
}

/* ── File Upload UI ── */
function initFileUpload() {
  const input = document.getElementById("resume");
  const nameEl = document.getElementById("resume-file-name");
  const uploadEl = document.getElementById("resume-upload");

  if (!input) return;

  input.addEventListener("change", () => {
    const file = input.files[0];
    if (file) {
      nameEl.textContent = file.name;
      nameEl.style.display = "block";
      uploadEl.classList.remove("error");
      clearError("resume-error", uploadEl);
    } else {
      nameEl.style.display = "none";
      nameEl.textContent = "";
    }
  });
}

/* ── Form Validation ── */
function initFormValidation() {
  const form = document.getElementById("application-form");
  if (!form) return;

  /* Clear errors on input */
  form.querySelectorAll(".form-input, .form-select, .form-textarea").forEach((el) => {
    el.addEventListener("input", () => {
      el.classList.remove("error");
      const errorEl = document.getElementById(`${el.id}-error`);
      if (errorEl) errorEl.classList.remove("visible");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      showSuccess();
    }
  });
}

function validateForm() {
  let isValid = true;

  /* Full Name */
  const name = document.getElementById("full-name");
  if (!name.value.trim() || name.value.trim().length < 2) {
    showError("full-name", "full-name-error");
    isValid = false;
  }

  /* Email */
  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
    showError("email", "email-error");
    isValid = false;
  }

  /* Phone */
  const phone = document.getElementById("phone");
  const phoneDigits = phone.value.replace(/\D/g, "");
  if (!phone.value.trim() || phoneDigits.length < 7) {
    showError("phone", "phone-error");
    isValid = false;
  }

  /* Qualification */
  const qualification = document.getElementById("qualification");
  if (!qualification.value) {
    showError("qualification", "qualification-error");
    isValid = false;
  }

  /* Skills */
  const skills = document.getElementById("skills");
  if (!skills.value.trim()) {
    showError("skills", "skills-error");
    isValid = false;
  }

  /* Resume */
  const resume = document.getElementById("resume");
  const uploadEl = document.getElementById("resume-upload");
  const resumeError = document.getElementById("resume-error");
  if (!resume.files || !resume.files[0]) {
    uploadEl.classList.add("error");
    resumeError.classList.add("visible");
    isValid = false;
  } else {
    const file = resume.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; /* 5 MB */

    if (!allowedTypes.includes(file.type) || file.size > maxSize) {
      uploadEl.classList.add("error");
      resumeError.classList.add("visible");
      isValid = false;
    }
  }

  /* Scroll to first error */
  if (!isValid) {
    const firstError = document.querySelector(".form-input.error, .form-select.error, .file-upload.error");
    if (firstError) {
      firstError.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return isValid;
}

function showError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add("error");
  if (error) error.classList.add("visible");
}

function clearError(errorId, el) {
  const error = document.getElementById(errorId);
  if (error) error.classList.remove("visible");
  if (el) el.classList.remove("error");
}

/* ── Success State ── */
function showSuccess() {
  const form = document.getElementById("application-form");
  const banner = document.getElementById("apply-job-banner");
  const success = document.getElementById("success-state");
  const message = document.getElementById("success-message");

  /* Get the job title */
  const params = new URLSearchParams(window.location.search);
  const jobId = params.get("job");
  const job = JOBS.find((j) => j.id === jobId);

  if (job) {
    message.textContent = `Thank you for applying for the ${job.title} position. This is a demo submission — no data has been sent or stored. In a real application, your information would be processed securely.`;
  }

  form.style.display = "none";
  if (banner) banner.style.display = "none";
  success.classList.add("visible");

  success.scrollIntoView({ behavior: "smooth", block: "start" });
}
