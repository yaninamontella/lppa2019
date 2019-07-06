const initialState=[
  [undefined, undefined, 1, 1, 1, undefined, undefined],
  [undefined, undefined, 1, 1, 1, undefined, undefined],
  [1, 1, 1, 1, 1, 1,1],
  [1, 1, 1, 0, 1, 1,1],
  [1, 1, 1, 1, 1, 1,1],
  [undefined, undefined, 1, 1, 1, undefined, undefined],
  [undefined, undefined, 1, 1, 1, undefined, undefined]
];

//codigo html en js
var dynamicBoard='<ul class="list">'

for (var i=0;i < initialState.length; i++)
{
  dynamicBoard+='<li>'
  for (var j=0;j < initialState[i].length; j++)
  {
    if(initialState[i][j]===1)
    {
      dynamicBoard+='<button class="ball-place"></button>'
    }
    else
    {
      if(initialState[i][j]===0)
      {
        dynamicBoard+='<button class="ball-place-empty"></button>'
      }
      else
      {
        dynamicBoard+='<button class="place-empty"></button>'
      }
    }
  }
    dynamicBoard+='</li>';
};

dynamicBoard+='</ul>';
console.log(dynamicBoard);

window.onload=function()
{
  //obtenemos el elemento dibujado en el HTML
  const boardElement=document.getElementById('board');

  //asignamos dynamicBoard
  boardElement.innerHTML=dynamicBoard
};
