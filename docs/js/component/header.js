class HeaderComponent extends Component{
    template(){
        return `<header id="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#" id="header-logo">
                    <img src="https://raw.githubusercontent.com/orbitthemes/Orbit-Themes/master/assets/logo.png"
                        class="img-fluid" width="200" alt="Orbit Themes">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-navigation"
                    aria-controls="top-navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="top-navigation">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <comp-cart id="comp-cart"></comp-cart>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-primary ml-lg-3" href="#">
                                <i class="fa fa-sign-in"></i> Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`
    }
}

customElements.define('comp-header', HeaderComponent)