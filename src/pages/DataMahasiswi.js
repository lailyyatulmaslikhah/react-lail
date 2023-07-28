//panggil component profile yang sudah kita buat difolder components
// import Carddiri from "../components/Carddiri";
// import Pahlawan from "../components/Pahlawan";
// import AddMahasiswi from "../mahasiswis/AddMahasiswi"
// import EditMahasiswi from "../mahasiswis/EditMahasiswi";
// import ListMahasiswi from "../mahasiswis/ListMahasiswi"
import React from 'react';

// export default function Mahasiswi() {
//     return (
//         <>
//         <AddMahasiswi />
//         <EditMahasiswi />
//         <ListMahasiswi />
//         </>
//     );
// }

import ListMahasiswi from "../mahasiswis/ListMahasiswi";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <ListMahasiswi data={data} />
    </>
  );
}
