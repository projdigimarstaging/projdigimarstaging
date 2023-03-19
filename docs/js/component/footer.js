class FooterComponent extends Component{
    template(){
        return `
        <footer id="footer" class="mt-auto">
        <p class="copyright">Made with 
            <i class="fa fa-heart"></i> By IT Team ©
            <span id="currentYear">2023</span> All Rights Reserved.
        </p>
        <div class="social">
            <a traget="_blank" href="https://facebook.com/" title="facebook">
                <i class="fa fa-facebook"></i>
            </a>
            <a traget="_blank" href="https://twitter.com/" title="twitter">
                <i class="fa fa-twitter"></i>
            </a>
            <a traget="_blank" href="https://plus.google.com/" title="Google+" target="_blank">
                <i class="fa fa-google-plus"></i>
            </a>
            <a traget="_blank" href="https://github.com/" title="github" target="_blank">
                <i class="fa fa-github"></i>
            </a>
            <a traget="_blank" href="https://www.behance.net/" title="Behance" target="_blank">
                <i class="fa fa-behance"></i>
            </a>
            <a traget="_blank" href="https://dribbble.com/" title="Dribbble" target="_blank">
                <i class="fa fa-dribbble"></i>
            </a>
            <a traget="_blank" href="https://www.pinterest.com/" title="Pinterest" target="_blank">
                <i class="fa fa-pinterest"></i>
            </a>
            <a traget="_blank" href="https://www.reddit.com/" title="Reddit" target="_blank">
                <i class="fa fa-reddit"></i>
            </a>
        </div>
    </footer>
        `
    }
}

customElements.define('comp-footer', FooterComponent);