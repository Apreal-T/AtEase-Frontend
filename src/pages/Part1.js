const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="firstbar">
                <a href ="/"><img src="/images/atease-logo-white.svg" className="logo" alt= ""/></a>
                <h1>SAFE HAVEN FOR FREELANCERS</h1>
            </div>
        
            <div className="links">
                <a href ="/">HOME</a>
                <a href ="/">INVEST NOW</a>
                <a href ="/">INDUSTRIES</a>
                <a href ="/">SERVICES</a>
                <a href ="/">REGISTER/LOGIN</a>
                <form> 
                    <input type= "text" name= "search"/>
                </form>
            </div>
        </nav>
     );
}
 
export default Navbar;