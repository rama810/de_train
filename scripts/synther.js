const synth = extendContent(GenericCrafter, "synthesizer", {
  load: function(){
    this.region = Core.atlas.find(this.name);
    this.weaveRegion = Core.atlas.find(this.name + "-weave");
  },
  
  generateIcons: function(){
	return [
		Core.atlas.find(modName + "-synthesizer"),
		Core.atlas.find(modName + "-synthesizer-weave")
	];},
	
	draw: function(tile){
	  entity = tile.ent();
		
		Draw.rect(this.region, tile.drawx(), tile.drawy());
		
		Draw.alpha(entity.warmup);
		Draw.color();
		
		Draw.rect(this.weaveRegion, tile.drawx(), tile.drawy(), entity.totalProgress * 1.3);
	}
});

const synthSmoke = newEffect(30, e => {
  Draw.color(Color.valueOf("d0e7cd"), Color.valueOf("f2f2f2"), e.fin());
  const h = new Floatc2({get: function(x, y){
    Draw.color(Color.valueOf("d0e7cd"), Color.valueOf("f2f2f2"), e.fin());
    Fill.square(e.x + x, e.y + y, e.fout() * 3, 35);
  }});
  Angles.randLenVectors(e.id, 12, 4 + e.fin() * 7, e.rotation, (e.x, e.y), h);
});

synth.updateEffect = synthSmoke;