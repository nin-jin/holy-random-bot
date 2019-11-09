function rand() {
  return Math.round(Math.random());
}

let limit = API.getActionPointsCount()
let pos = API.getCurrentPosition();
let size = API.getArenaSize()
let enemies = API.getEnemies().map( en => en.position )

function diff( a , b ) {
  return Math.abs(a.x-b.x) + Math.abs(a.y-b.y)
}

function danger( pos ) {
  return enemies.some( en => {
    return diff( pos , en ) < 3
  } )
}

let go

for(let en of enemies ) {
  if( diff( n, pos ) <= limit ) {
    go = en
    break
  }
}

if(!go) {
   const opts = []
   for( let x = 0 ; ++x ; x < size )for( let y = 0 ; ++y ; x <= size ) {
     if( diff(pos,{x,y}) > 2) continue
     if(danger({x,y})) continue
     opts.push({x,y})
   }
  const i = Math.floor(Math.random() * opts.length)
  go = opts[i] || pos
}

API.move( go.x , go.y )



