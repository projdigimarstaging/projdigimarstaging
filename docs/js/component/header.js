class HeaderComponent extends Component{
    template(){
        return `<header id="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="/index.html" id="header-logo" title="Logo">
                    <img src="img/logo.png"
                        class="img-fluid" style="height:30px;" alt="Orbit Themes">
                    <span class="text-pink">KEY/MY/YOU</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-navigation"
                    aria-controls="top-navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="top-navigation">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active" title="Toko">
                            <a class="nav-link" href="index.html">Shop
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <!--li class="nav-item">
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
                        </li-->
                        <li class="nav-item" title="keranjang belanja">
                            <comp-cart id="comp-cart"></comp-cart>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-secondary ml-lg-3" title="Belum ada implementasi">
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