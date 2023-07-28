//panggil component profile yang sudah kita buat difolder components
import React from 'react';
import Husestate from "../components/Husestate";
import Useeffectres from "../components/Useeffectres";
import Windowwidth from "../components/Windowwidth";
import Datafetchinguseeffect from "../components/Datafetchinguseeffect";
import Callback from "../components/Callback";
import Hookuseid from "../components/Hookuseid";
import Ref from "../components/Ref";
import Themecontext from "../components/Themecontext";
import DataFetching from "../components/DataFetching";






    export default function Hooks() {
        return (
            <>
            <div style={{ padding: '50px'}}>
                <header>
                    <h5>1. USE STATE</h5>
                    <center><h2>Aplikasi Penghitung Skor Basket</h2></center>
                </header>
                <hr />
                <Husestate />
                <hr />

                <header>
                    <h5>2. USE EFFECT </h5>
                    <center><h2>Button</h2></center>
                </header>
                <hr /><center>
                <Useeffectres />
                </center><hr />

                <header>
                    <h5>3. USE EFFECT PART 1</h5>
                    <center><h2>Window Width</h2></center>
                </header>
                <hr /><center>
                <Windowwidth />
                </center><hr />

                <header>
                    <h5>3. USE EFFECT MATERI</h5>
                    <center><h2>USE EFFECT MATERI</h2></center>
                </header>
                <hr /><center>
                <Datafetchinguseeffect />
                </center><hr />

                <header>
                    <h5>4. HOOK USE CALLBACK</h5>
                    <center><h2>USE CALLBACK</h2></center>
                </header>
                <hr /><center>
                <Callback />
                </center><hr />

                <header>
                    <h5>5. HOOK USE ID</h5>
                    <center><h2>USE ID</h2></center>
                </header>
                <hr /><center>
                <Hookuseid />
                </center><hr />

                <header>
                    <h5>6. HOOK USE REF</h5>
                    <center><h2>USE REF</h2></center>
                </header>
                <hr /><center>
                <Ref />
                </center><hr />

                <header>
                    <h5>7. HOOK USE CONTEXT</h5>
                    <center><h2>USE CONTEXT</h2></center>
                </header>
                <hr /><center>
                <Themecontext />
                </center><hr />

                <header>
                    <h5>8. DATA FETCHING</h5>
                    <center><h2>DATA FETCHING</h2></center>
                </header>
                <center><hr />
                <DataFetching />
                <hr /></center>
                
                
            </div>
            </>
            
        )
    }
