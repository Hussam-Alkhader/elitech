class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
 <!-- Footer area start here -->
    <footer class="footer-area secondary-bg">
        <div class="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img src="assets/images/shape/footer-regular-left.png" alt="shape">
        </div>
        <div class="footer__shape-solid-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img class="sway_Y__animation" src="assets/images/shape/footer-solid-left.png" alt="shape">
        </div>
        <div class="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img class="sway_Y__animation" src="assets/images/shape/footer-regular-right.png" alt="shape">
        </div>
        <div class="footer__shape-regular-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
            <img src="assets/images/shape/footer-solid-right.png" alt="shape">
        </div>
        <div class="footer__shadow-shape">
            <img src="assets/images/shape/footer-shadow-shape.png" alt="shodow">
        </div>
        <div class="container">
            <div class="footer__wrp pt-100 pb-100">
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <a href="index.html" class="logo mb-30">
                        <img src="assets/images/logo/logo.svg" alt="image">
                    </a>
                    <p>At Elitech, we are passionate about transforming education through innovative technology</p>
                    <div class="social-icon">
                        <a href="https://www.facebook.com/elitechco" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/elitechco?igsh=NjYwenowemU5ZzFn" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/elitech-co/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">Services</h3>
                    <ul>
                        <li><a href="e-learning-solutions.html"><i class="fa-regular fa-angles-right me-1"></i> E-learning </a></li>
                        <li><a href="creative-studio.html"><i class="fa-regular fa-angles-right me-1"></i> Creative Studio</a>
                        </li>
                        <li><a href="content-solutions.html"><i class="fa-regular fa-angles-right me-1"></i> Content Solutions </a>
                        </li>
                        <!-- <li><a href="service-details.html"><i class="fa-regular fa-angles-right me-1"></i> Cyber
                                Security</a></li> -->
                        <!-- <li><a href="service-details.html"><i class="fa-regular fa-angles-right me-1"></i> Data
                                Security</a></li> -->
                    </ul>
                </div>
                <div class="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">Quick Link</h3>
                    <ul>
                        <li><a href="about.html"><i class="fa-regular fa-angles-right me-1"></i> About Elitech</a></li>
                        <li><a href="service.html"><i class="fa-regular fa-angles-right me-1"></i> Our Services</a>
                        </li>
                        <!-- <li><a href="pricing.html"><i class="fa-regular fa-angles-right me-1"></i> Pricing Plan</a>
                        </li> -->
                        <li><a href="our-projects.html"><i class="fa-regular fa-angles-right me-1"></i> Our Projects</a></li>
                        <!-- <li><a href="team.html"><i class="fa-regular fa-angles-right me-1"></i> Our Team</a></li> -->
                    </ul>
                </div>
                <div class="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <h3 class="footer-title">Contact Us</h3>
                    <!-- <p class="mb-20">4517 Washington Ave. Manchester, Kentucky 39495</p> -->
                    <ul class="footer-contact">
                        <!-- <li>
                            <i class="fa-regular fa-clock"></i>
                            <div class="info">
                                <h5>
                                    Opening Hours:
                                </h5>
                                <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                            </div>
                        </li> -->
                        <li>
                            <i class="fa-duotone fa-phone"></i>
                            <div class="info">
                                <h5>
                                    Phone Call:
                                </h5>
                                <p>+962-6-4653-641</p>
                            </div>
                        </li>
                                                <li>
                            <i class="fa-duotone fa-mobile"></i>
                            <div class="info">
                                <h5>
                                    Mobile Call:
                                </h5>
                                <p>+962-79-2605-553</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="container">
                <div
                    class="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
                    <p class="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">&copy; All Copyright 2024
                        by <a href="#0">Elitech</a></p>
                    <ul class="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms"
                        data-wow-duration="1500ms">
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer area end here -->
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  