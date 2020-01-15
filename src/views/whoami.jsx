var React = require('react');
var SystemInfoLayout = require('./layouts/systeminfo');


const ListItem = (props) => {
  return(<div key={props.k} >{props.k} = {props.v}</div> );
}

const Dictionary = (props)=>{
  return(<div style={{border:'1px solid black', 'backgroundColor': 'lightgrey', padding: '3px'}}>
      <h4>{props.title}</h4>
      {
        Object.keys(props.dictionary).map(key=>{
          return ListItem({k:key, v:props.dictionary[key]})
        })
      }
    </div>)
}



function WhoAmI(props) {
  const vars = process.env;
  const nodeVars ={};
  const nodeVarsOrdered ={};
  
  //const x = Object.entries(vars); 
  Object.entries(vars).forEach(([key,value]) => {
    if(key.match(/node|npm/i)){
      nodeVars[key] = value;
    }
  });
  Object.keys( nodeVars).sort().forEach(function(key) {
    nodeVarsOrdered[key] =  nodeVars[key];
  });
  const x =3;
  return (
    <SystemInfoLayout title={props.title}>
      <h3>This should be in a 'protected' route</h3>
      <div>Hello {props.name}</div>
      <div> 
        <Dictionary title='node/npm environment variables' dictionary={nodeVarsOrdered} ></Dictionary>
        <Dictionary title='process env' dictionary={process.env} ></Dictionary>
     </div>
    </SystemInfoLayout>
  );
}

module.exports = WhoAmI;
