/* ==========================================================================
   DIAMOND GROUP - MODERN INTERACTIVE SCRIPTS
   - Accessible Slide-out Navigation Drawer
   - Native HTML5 <dialog> Quote Modal Controller
   - Dynamic WhatsApp Deep-link Generator for Spices & Furniture
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

  function openQuoteModal(presetDivision = "spices", presetItem = "") {
    if (quoteDialog) {
      quoteDialog.showModal();
      document.body.style.overflow = "hidden";
      const divisionSelect = document.querySelector("#modalDivision");
      if (divisionSelect) {
        divisionSelect.value = presetDivision;
        toggleModalFields(presetDivision);
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
      const division = btn.getAttribute("data-division") || "spices";
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

  // Division select switch inside modal
  const modalDivision = document.querySelector("#modalDivision");
  function toggleModalFields(val) {
    const spicesGroup = document.querySelector("#spicesSpecificFields");
    const furnitureGroup = document.querySelector("#furnitureSpecificFields");
    if (spicesGroup && furnitureGroup) {
      if (val === "furniture") {
        spicesGroup.style.display = "none";
        furnitureGroup.style.display = "block";
      } else {
        spicesGroup.style.display = "block";
        furnitureGroup.style.display = "none";
      }
    }
  }

  if (modalDivision) {
    modalDivision.addEventListener("change", (e) => {
      toggleModalFields(e.target.value);
    });
  }

  // 3. WhatsApp Direct Lead Form Processing
  const quoteForm = document.querySelector("#quoteForm");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#modalName")?.value || "";
      const phone = document.querySelector("#modalPhone")?.value || "";
      const division = document.querySelector("#modalDivision")?.value || "general";
      const details = document.querySelector("#modalItemRequirement")?.value || "";
      const quantity = document.querySelector("#modalQuantity")?.value || "";

      let msg = `Hello Diamond Group, I would like to request a quotation:%0A` +
        `*Name:* ${encodeURIComponent(name)}%0A` +
        `*Phone:* ${encodeURIComponent(phone)}%0A` +
        `*Division:* ${encodeURIComponent(division.toUpperCase())}%0A` +
        `*Requirement:* ${encodeURIComponent(details)}`;

      if (quantity) {
        msg += `%0A*Volume/Quantity:* ${encodeURIComponent(quantity)}`;
      }

      // WhatsApp redirection
      const whatsappNumber = "919626180279"; // Diamond Group MD Colvin Rejie / Desk
      const waUrl = `https://wa.me/${whatsappNumber}?text=${msg}`;
      
      const statusBox = document.querySelector("#modalStatusMessage");
      if (statusBox) {
        statusBox.style.display = "block";
        statusBox.innerHTML = "<p style="color: #0e4430; font-weight: 700;">Redirecting to WhatsApp to send your quotation inquiry...</p>";
      }

      setTimeout(() => {
        window.open(waUrl, "_blank");
        closeQuoteModal();
        if (statusBox) statusBox.style.display = "none";
      }, 1000);
    });
  }

  // 4. Catalog Filtering (on spices.html and furniture.html)
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

  // 5. Scroll Reveal with Intersection Observer
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".showcase-card, .product-card, .value-item, .contact-card-info, .form-box").forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      observer.observe(el);
    });

    document.addEventListener("scroll", () => {
      document.querySelectorAll(".revealed").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, { once: true });
  }
});
