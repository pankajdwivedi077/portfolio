import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Pankaj Dwivedi</span>
            <div className="social">
                <a href="#"><img src="/linkedin.png" alt="" height={64} width={64} /></a>
                <a href="#"><img src="/github.png" alt=""  height={64} width={64} /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/twitter.png" alt=""  height={64} width={64} /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar