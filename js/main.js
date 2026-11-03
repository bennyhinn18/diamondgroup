/* ==========================================================================
   DIAMOND GROUP - MODERN INTERACTIVE SCRIPTS
   - Accessible Slide-out Navigation Drawer
   - Native HTML5 <dialog> Quote Modal Controller
   - Dynamic WhatsApp Deep-link Generator for Diamond Group & Furniture
   - Filterable Catalogs & Smooth Micro-Interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Drawer Navigation
  const mobileToggle = document.querySelector(".mobile-toggle");
  const drawer = document.querySelector(".mobile-nav-drawer");
  const overlay = document.querySelector(".drawer-overlay");
  const drawerClose = document.querySelector(".drawer-close-btn");

  function openDrawer() {
    if (drawer && overlay) {
      drawer.classList.add("open");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  function closeDrawer() {
    if (drawer && overlay) {
      drawer.classList.remove("open");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
      closeQuoteModal();
    }
  });

  // 2. Quote Modal Dialog (<dialog>)
  const quoteDialog = document.querySelector("#quoteDialog");
  const openModalBtns = document.querySelectorAll(".open-quote-modal");
  const closeModalBtns = document.querySelectorAll(".close-quote-modal");

  function openQuoteModal(presetDivision = "furniture", presetItem = "") {
    if (quoteDialog) {
      quoteDialog.showModal();
      document.body.style.overflow = "hidden";
      const divisionSelect = document.querySelector("#modalDivision");
      if (divisionSelect) {
        divisionSelect.value = presetDivision;
      }
      const itemInput = document.querySelector("#modalItemRequirement");
      if (itemInput && presetItem) {
        itemInput.value = presetItem;
      }
    }
  }

  function closeQuoteModal() {
    if (quoteDialog && quoteDialog.open) {
      quoteDialog.close();
      document.body.style.overflow = "";
    }
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const division = btn.getAttribute("data-division") || "furniture";
      const item = btn.getAttribute("data-item") || "";
      openQuoteModal(division, item);
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", closeQuoteModal);
  });

  if (quoteDialog) {
    quoteDialog.addEventListener("click", (e) => {
      const rect = quoteDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeQuoteModal();
      }
    });
  }

  // 3. WhatsApp Direct Lead Form Processing
  const quoteForm = document.querySelector("#quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#modalName")?.value || "";
      const phone = document.querySelector("#modalPhone")?.value || "";
      const division = document.querySelector("#modalDivision")?.value || "furniture";
      const details = document.querySelector("#modalItemRequirement")?.value || "";
      const dimensions = document.querySelector("#modalDimensions")?.value || "";

      let msg = `Hello Diamond Group, I would like to inquire:%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Category:* ${encodeURIComponent(division.toUpperCase())}%0A` +
        `*Requirement:* ${encodeURIComponent(details)}`;

      if (dimensions) {
        msg += `%0A*Dimensions/Specs:* ${encodeURIComponent(dimensions)}`;
      }

      // WhatsApp redirection to Managing Director (+91 89431 80277)
      const whatsappNumber = "918943180277";
      const waUrl = `https://wa.me/${whatsappNumber}?text=${msg}`;
      
      const statusBox = document.querySelector("#modalStatusMessage");
      if (statusBox) {
        statusBox.style.display = "block";
        statusBox.innerHTML = "<p style=\"color: #0e4430; font-weight: 700;\">Connecting to Managing Director via WhatsApp...</p>";
      }

      setTimeout(() => {
        window.open(waUrl, "_blank");
        closeQuoteModal();
        if (statusBox) statusBox.style.display = "none";
      }, 800);
    });
  }

  // 4. Catalog Filtering (on furniture page)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      productCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter || category.includes(filter)) {
          card.style.display = "flex";
          card.style.animation = "fadeIn 0.4s ease";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 5. Scroll Reveal & Visibility (Guaranteed Content Visibility)
  const revealElements = document.querySelectorAll(".showcase-card, .product-card, .value-item, .contact-card-info, .form-box, .hero-stat-card");
  revealElements.forEach((el) => {
    el.classList.add("revealed");
    el.style.opacity = "1";
    el.style.transform = "none";
  });
});
