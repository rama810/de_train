const primeColor = Color.valueOf("#f78c34");
const effectColor1 = Color.valueOf("#ed3a29");
const effectColor2 = Color.valueOf("#ff9166");
const popEffect = newEffect(20, e => {
	Draw.color(primeColor, effectColor1, e.fin());
	const hh = new Floatc2({get: function(x, y){
	  Draw.color(Color.valueOf("#ed3a29"), effectColor2, e.fin());
		Fill.circle(e.x, e.y, e.fout() * 3);
	}});
	//randLenVectors(long seed, int amount, float length, float angle, float range, Floatc2 const)
	Angles.randLenVectors(e.id, 8, e.fout(), e.rotation, 10, hh);
});

const melt = new StatusEffect("melt");
  melt.damageMultiplier = 0.6;
  melt.speedMultiplier = 0.5;
  melt.armorMultiplier = 0.3;
  melt.damage = 0.6;
  melt.color = effectColor1;
  melt.effect = popEffect;
  
const molteniron = extendContent(Liquid, "molten-iron", {});
  molteniron.localizedName = "Molten Iron";
  molteniron.description = "It's still iron, by the way.";
  molteniron.temperature = 1;
  molteniron.viscosity = 0.9;
  molteniron.color = primeColor;
  molteniron.lightColor = Color.valueOf("E73636FF");
  molteniron.effect = melt;