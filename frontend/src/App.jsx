import { useEffect, useState } from "react";
import axios from "axios";
import { getName } from "./utils/names";
import { saveAs } from 'file-saver'

// https://i.waifu.pics/II9WeHB.png
// https://i.waifu.pics/CNzs4Pd.jpg

function App() {

  const [url, setUrl] = useState();
  const [n, setN] = useState(0);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    axios.get('https://api.waifu.pics/sfw/waifu')
      .then((r) => {
        setUrl(r.data.url);
        setName(getName().name);
        setAge(getName().age);
      })


  }, [n])

  const handleDownload = () => {
    saveAs(url, 'image.jpg')
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
        <div class="h-[500px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white flex justify-center items-center">
          {/* <p>hi</p> */}
          <img className="object-cover h-[500px] shadow-lg overflow-hidden rounded-xl" src={url} alt="" srcset="" />
        </div>
        <div class="px-6 pt-4 pb-2">
          <h5 class=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {name} {age}
          </h5>
          <div className="flex justify-center items-center gap-4 pt-2">

            <button onClick={() => setN(n + 1)}>
              <svg className="size-8" fill="#ff4d4d" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.00 490.00" xml:space="preserve" stroke="#ff4d4d" stroke-width="49"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
            </button>

            <button className="p-0 m-0" onClick={handleDownload}>
              <svg className="size-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z" fill="#0080c0"></path> </g></svg>
            </button>

            <button className="p-0 m-0" onClick={() => setN(n + 1)}>
              <svg className="size-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#00ff80"></path></g></svg>
            </button>




          </div>

        </div>
      </div>
    </div>
  )
}

export default App
