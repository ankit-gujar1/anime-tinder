import { useEffect, useState } from "react";
import axios from "axios";
import { getName } from "./utils/names";
import { saveAs } from 'file-saver'

// https://i.waifu.pics/II9WeHB.png
// https://i.waifu.pics/CNzs4Pd.jpg

function App() {

  const [url, setUrl] = useState();
  const [api, setApi] = useState('https://api.waifu.pics/sfw/waifu');
  const [n, setN] = useState(0);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const [arrow, setArrow] = useState(0);

  useEffect(() => {
    axios.get(api)
      .then((r) => {
        setUrl(r.data.url);
        setName(getName().name);
        setAge(getName().age);
      })
      .catch((e) => {
        console.log(e);
      })

  }, [n, api, arrow]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        setArrow(prevArrow => prevArrow + 1);
      } else if (e.key === 'ArrowUp') {
        setApi('https://api.waifu.pics/nsfw/waifu');
      } else if (e.key === 'ArrowDown') {
        setApi('https://api.waifu.pics/sfw/waifu');
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  console.log('arrow',arrow);

  const handleDownload = () => {
    saveAs(url, 'image.jpg')
  };

  const handleAdult = () => {
    if (api === 'https://api.waifu.pics/sfw/waifu') setApi('https://api.waifu.pics/nsfw/waifu')
    else if (api === 'https://api.waifu.pics/nsfw/waifu') setApi('https://api.waifu.pics/sfw/waifu')
  };

  return (

    <div className="flex flex-col justify-center items-center h-screen">

      <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
        <div class="h-[500px] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white flex justify-center items-center">
          {/* <p>hi</p> */}
          <img className="object-cover h-[500px] shadow-lg overflow-hidden rounded-xl" src={url} alt="" srcset="" />
        </div>
        <div class="px-6 pt-4 pb-2">
          <h5 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <b className="text-3xl">{name} </b>{age}
          </h5>
          <div className="flex justify-center items-center gap-4 pt-2">

            {/* nope */}
            <button onClick={() => setN(n + 1)}>
              <svg className="size-10 mr-2" fill="#ff4d4d" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.00 490.00" xml:space="preserve" stroke="#ff4d4d" stroke-width="49"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
            </button>

            {/* download */}
            <button className="p-0 m-0" onClick={handleDownload}>
              <svg className="size-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z" fill="#0080c0"></path> </g></svg>
            </button>

            {/* 18+ */}
            <button onClick={handleAdult}>
              {/* <svg className="size-10" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ff4f4f" fill-rule="evenodd" d="M5.781 4.414a7 7 0 019.62 10.039l-9.62-10.04zm-1.408 1.42a7 7 0 009.549 9.964L4.373 5.836zM10 1a9 9 0 100 18 9 9 0 000-18z"></path> </g></svg> */}

              <svg className="size-10" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>{`.cls-1{fill:none;stroke:#ff5757;stroke-miterlimit:10;stroke-width:1.91px;}`}</style></defs><path class="cls-1" d="M19.45,19.42a10.5,10.5,0,1,1,0-14.84"></path><rect class="cls-1" x="11.07" y="8.18" width="4.77" height="3.82" rx="1.91"></rect><rect class="cls-1" x="11.07" y="12" width="4.77" height="3.82" rx="1.91"></rect><line class="cls-1" x1="7.25" y1="7.23" x2="7.25" y2="15.82"></line><line class="cls-1" x1="5.34" y1="15.82" x2="9.16" y2="15.82"></line><line class="cls-1" x1="5.34" y1="9.14" x2="8.2" y2="9.14"></line><line class="cls-1" x1="17.75" y1="12" x2="23.48" y2="12"></line><line class="cls-1" x1="20.61" y1="9.14" x2="20.61" y2="14.86"></line></g></svg>
            </button>

            {/* like */}
            <button className="p-0 m-0" onClick={() => setN(n + 1)}>
              <svg className="size-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill="#00ff80"></path></g></svg>
            </button>


          </div>

        </div>
      </div>

      <div className="flex justify-center items-center mt-5 gap-4">
        <div className="flex justify-center items-center gap-1">
          <svg focusable="false" aria-hidden="true" role="img" viewBox="0 0 24 24" width="24px" height="24px" class="H(24px) Mend(4px) Scale(.9)" aria-labelledby="1ee14f2163bf3013"><g transform="translate(2 2) rotate(0 10 10)" fill="none" fill-rule="evenodd"><path d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433" fill="currentColor" fill-rule="nonzero"></path><rect stroke="currentColor" stroke-width="2.5" width="20" height="20" rx="3"></rect></g><title id="1ee14f2163bf3013">Left</title></svg>
          <p className="font-bold">Nope</p>
        </div>
        <div className="flex justify-center items-center gap-1">
          <svg focusable="false" aria-hidden="true" role="img" viewBox="0 0 24 24" width="24px" height="24px" class="H(24px) Mend(4px) Scale(.9)" aria-labelledby="154d80104c59ea37"><g transform="translate(2 2) rotate(180 10 10)" fill="none" fill-rule="evenodd"><path d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433" fill="currentColor" fill-rule="nonzero"></path><rect stroke="currentColor" stroke-width="2.5" width="20" height="20" rx="3"></rect></g><title id="154d80104c59ea37">Right</title></svg>
          <p className="font-bold">Like</p>
        </div>

        <div className="flex justify-center items-center gap-1">
          <svg focusable="false" aria-hidden="true" role="img" viewBox="0 0 24 24" width="24px" height="24px" class="H(24px) Mend(4px) Scale(.9)" aria-labelledby="d729db18df9cf26a"><g transform="translate(2 2) rotate(90 10 10)" fill="none" fill-rule="evenodd"><path d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433" fill="currentColor" fill-rule="nonzero"></path><rect stroke="currentColor" stroke-width="2.5" width="20" height="20" rx="3"></rect></g><title id="d729db18df9cf26a">Up</title></svg>
          <p className="font-bold">NSFW</p>
        </div>

        <div className="flex justify-center items-center gap-1">
          <svg focusable="false" aria-hidden="true" role="img" viewBox="0 0 24 24" width="24px" height="24px" class="H(24px) Mend(4px) Scale(.9)" aria-labelledby="0f8636382b9e83cd"><g transform="translate(2 2) rotate(270 10 10)" fill="none" fill-rule="evenodd"><path d="M5.368 11.041l1.227.985 1.785 1.433 1.226.984c.491.395.893.208.893-.413v-1.908c.743-.106 3.574-.444 4.198-.533.742-.106 1.29-.568 1.29-1.262v-.003c0-.695-.548-1.157-1.29-1.263-.624-.089-3.455-.427-4.198-.533V6.62c0-.621-.401-.807-.892-.413L8.38 7.19 6.595 8.624l-1.227.984c-.49.395-.49 1.04 0 1.433" fill="currentColor" fill-rule="nonzero"></path><rect stroke="currentColor" stroke-width="2.5" width="20" height="20" rx="3"></rect></g><title id="0f8636382b9e83cd">Down</title></svg>
          <p className="font-bold">SFW</p>
        </div>
      </div>
    </div>
  )
}

export default App
