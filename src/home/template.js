var yo = require('yo-yo');
var landing = require('../landing');
var home = yo`<div class="col s12 m7">
                        <div class="row">
                            <div class="signup-box">
                                <h1 class="platzigram">Platzigram</h1>
                                <h2>Welcome</>  
                            </div>
                        </div>
                        <div class="row">
                        <div class="signin-box">
                            ¿ tienes una cuenta? <a href="/signin">Loguearse</a>
                            </div>
                            <div class="signin-box">
                            ¿ No tienes una cuenta? <a href="/signup">Registrate</a>
                            </div>
                        </div>`;  
module.exports = landing(home);                        