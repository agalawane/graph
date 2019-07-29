export const userAction1 = async () => { 

  const response1 = await fetch('http://172.17.20.36:44323/pmapi/context?hostname=10.0.2.15');
  const myJson1 = await response1.json(); //extract JSON from the http response
  // do something with myJson
  console.log("4",myJson1['context']);
  var text="http://172.17.20.36:44323/pmapi/";
  var context1=myJson1['context'];
  var context=context1.toString();
  var text1="/_fetch?pmids=251658262,251658260,251658272,251658312,251658313,251658244,251658245,251659269,251659265,251659266,251659268,251661312,251661320";

  var url=text+context+text1;



  const response = await fetch(url, {
      method: 'GET'
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("1",myJson);
    console.log("2",myJson['timestamp']);
    console.log("3",myJson['timestamp']['us']);
    return myJson;
  }
export const userAction = async () => {
    const response = await fetch('http://172.17.20.36:44323/pmapi/context?hostname=10.0.2.15');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("4",myJson['context']);
    return myJson;

  }