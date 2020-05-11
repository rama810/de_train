const mill = extendContent(GenericSmelter, "steel-mill", {
  load: function(){
    this.region = Core.atlas.find(this.name);
    this.rotateRegion = Core.atlas.find(this.name + "-rotator");
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  
  generateIcons: function(){
  return [
    Core.atlas.find(modName + "-steel-mill"),
    Core.atlas.find(modName + "-steel-mill-rotator"),
    Core.atlas.find(modName + "-steel-mill-top")
  ];},
   
  draw: function(tile){
    entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    
    Draw.alpha(entity.warmup);
    Draw.color();
    
    Draw.rect(this.rotateRegion, tile.drawx(), tile.drawy(), entity.totalProgress * 1.7);
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
  }
});