const producer = extendContent(GenericCrafter, "fiber-producer", {
  load: function(){
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-top");
    this.spinRegion = Core.atlas.find(this.name + "-spinner");
  },
  generateIcons: function(){
    return [
      Core.atlas.find(modName + "-fiber-producer"),
      Core.atlas.find(modName + "-fiber-producer-spinner"),
      Core.atlas.find(modName + "-fiber-producer-top")
    ];
  },
  draw: function(tile){
    entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    
    Draw.alpha(entity.warmup);
    Draw.color();
    
    Draw.rect(this.spinRegion, tile.drawx(), tile.drawy(), entity.totalProgress * 2);
    Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
  }
});