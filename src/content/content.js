import React from "react";
import './content.css';
import { useEffect, useState } from "react";

export default function Content() {
	const [datas, setDatas] = useState([
		{ title: "", url: "", thumbnailURL: "" },
		{ title: "", url: "", thumbnailURL: "" },
		{ title: "", url: "", thumbnailURL: "" },
		{ title: "", url: "", thumbnailURL: "" }
	]);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		async function loadData() {
			const response = await fetch(
				"https://my-json-server.typicode.com/brenobernardes/my-json-server/albums"
			);
			const data = await response.json();
			setDatas(data);
		}

		loadData();
	}, []);

	return (
    <section>
      <div className="contentSection">
        
        <div className="textContent">

          <h2>{datas[index].title}</h2>
          <button><a href="https://www.corebiz.ag/pt/">Veja mais</a></button>

        </div>

        <div className="image1"> 
            
          <img
            src={datas[0].thumbnailURL}
            alt={datas[0].title}
            onClick={() => setIndex(0)}
          />
          <img
            src={datas[1].thumbnailURL}
            alt={datas[0].title}
            onClick={() => setIndex(1)}
          />
          <img
            src={datas[2].thumbnailURL}
            alt={datas[0].title}
            onClick={() => setIndex(2)}
          />
          <img
            src={datas[3].thumbnailURL}
            alt={datas[0].title}
            onClick={() => setIndex(3)}
          />
        </div>

        

        <div className="image2">
          <img src={datas[index].url} alt={datas[index].title} />
        </div>
          
		  </div>
    </section>

	);
}