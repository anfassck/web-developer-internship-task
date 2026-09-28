/**
 * NovaHire Technologies — Home Page Script
 * Renders featured job cards on the home page.
 */

function renderFeaturedJobs() {
  const grid = document.getElementById("featured-jobs-grid");
  if (!grid) return;

  /* Show first 3 jobs as featured */
  const featured = JOBS.slice(0, 3);

  grid.innerHTML = featured
    .map(
      (job) => `
    <article class="job-card fade-in" id="featured-${job.id}">
      <div class="job-card__header">
        <h3 class="job-card__title">${job.title}</h3>
        <div class="job-card__meta">
          <span class="job-card__meta-item">
            ${icon("location", "icon--sm")}
            ${job.location}
          </span>
          <span class="job-card__meta-item">
            ${icon("clock", "icon--sm")}
            ${job.experience}
          </span>
          <span class="job-card__meta-item">
            ${icon("briefcase", "icon--sm")}
            ${job.type}
          </span>
        </div>
      </div>
      <p class="job-card__description">${job.description}</p>
      <div class="job-card__skills">
        ${job.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
      </div>
      <div class="job-card__footer">
        <a href="apply.html?job=${job.id}" class="btn btn--primary btn--sm" id="apply-${job.id}">Apply Now</a>
      </div>
    </article>
  `
    )
    .join("");

  /* Re-observe new fade-in elements */
  initScrollAnimations();
}

document.addEventListener("DOMContentLoaded", renderFeaturedJobs);
