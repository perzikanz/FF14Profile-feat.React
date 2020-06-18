import React from 'react';
import ReactDOM, { render } from "react-dom";
import './index.css';


function Button(props) {
  return(
    <button onClick={() => getCharaData(props.lodestoneId, props.setCharacterData)}>
      押してね
    </button>
  );
}

function getCharaData(lodestoneId, setCharacterData){ 
  fetch(`https://xivapi.com/character/${lodestoneId}?data=CJ`).then(response => response.json()).then(jsonData => {
    reflecteCharacterData(jsonData);
    setCharacterData(jsonData);
  });
}

function reflecteCharacterData(jsonData){
  console.log(jsonData);
}

class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      lodestoneId: "",
      characterData: {
        name: "キャラクター名",
        imgSrc: "",

      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.setCharacterData = this.setCharacterData.bind(this);
  }

  handleChange(event) {
    this.setState({lodestoneId: event.target.value});
  }

  setCharacterData(data){
    this.setState({characterData: {
      name: data.Character.Name,
      imgSrc: data.Character.Portrait,

    }});
  }

  render() {
    return (
      <div>
        <div>
        <label>
          Lodestone ID：
          <input type="text"
            value={this.state.lodestoneId}
            onChange={this.handleChange} 
          />
        </label>
        <Button lodestoneId={this.state.lodestoneId} setCharacterData={this.setCharacterData} />
        </div>
        <div>{this.state.characterData.name}</div>
        <div>
          {/* {this.state.characterData.imgSrc && <img className="profileImage"
          src={this.state.characterData.imgSrc} alt="プロフィール画像" />} */}
          {this.state.characterData.imgSrc ? 
          <img className="profileImage"　src={this.state.characterData.imgSrc} alt="プロフィール画像" />: 
          <span>ここに画像が出ます</span>}
        </div>
        <div className="job">
          <p>ジョブレベル</p>
          <ul>TH</ul>
          <ul>DPS</ul>
          <ul>ギャザクラ</ul>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Profile />,
  document.getElementById('root')
);