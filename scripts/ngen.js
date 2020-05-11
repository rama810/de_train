const ngen = extendContent(GenericCrafter, "nitrogen-generator", {
  load: function(){
    this.region = Core.atlas.find(this.name);
  },
  
  generateIcons: function(){
    return [
      Core.atlas.find(modName + "-nitrogen-generator")
    ];
  },
});

const nitroWee = newEffect(40, e => {
  Draw.color(Color.valueOf("bdfffb"), Color.valueOf("d1fffc"), e.fin());
  Lines.circle(e.x, e.y, e.fout() * 6);
  Lines.stroke(e.fout() * 5);
});

ngen.updateEffect = nitroWee;