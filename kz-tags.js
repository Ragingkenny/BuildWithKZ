class kzHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg fixed-top py-3 navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">KZ</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon navbar-toggler-color-green"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="services.html">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="projects.html">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="contactus.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> `
    }
}

customElements.define("kz-header", kzHeader);

class kzBreak extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <div class="container text-center">
        <div class="row">
          <div class="col"><img class="break" src="Images/screw.png" alt=""></div>
          <div class="col"><img class="break" src="Images/screw.png" alt=""></div>
          <div class="col"><img class="break" src="Images/screw.png" alt=""></div>
        </div>
      </div>
        `
    }
}

customElements.define("kz-break", kzBreak);
<<<<<<< HEAD




=======
>>>>>>> 63d90bb01dee78d040a6f34cfe8a78cadd552191
