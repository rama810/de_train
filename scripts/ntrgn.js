const primeColor = Color.valueOf("#f0fdfe");
const effectColor = Color.valueOf("#fbfdfd22");
const belowZeroEffect = newEffect(10, e => {
	Draw.color(primeColor, effectColor, e.fin());
	const ss = new Floatc2({get: function(x, y){
	  Draw.color(Color.valueOf("#dbf6fe"), effectColor, e.fin());
		Fill.poly(e.x + x, e.y + y, 6, e.fout() * 3, e.rotation);
	}});
	//randLenVectors(long seed, int amount, float length, float angle, float range, Floatc2 const)
	Angles.randLenVectors(e.id, 8, e.fout(), e.rotation, 10, ss);
});
  
const belowZero = new StatusEffect("belowZero");
  belowZero.damageMultiplier = 1;
  belowZero.speedMultiplier = 0;
  belowZero.armorMultiplier = 0;
  belowZero.damage = 1.5;
  belowZero.color = Color.valueOf("#DBF6FE");
  belowZero.effect = belowZeroEffect;
  
const ntrgn = extendContent(Liquid, "nitrogen",{});
  ntrgn.localizedName = "Nitrogen";
  ntrgn.descriptionb = "Liquidified nitrogen at a temperature below zero. Not recommended to be used for cooling due to it's temperature.";
  ntrgn.color = primeColor;
  ntrgn.temperature = 0;
  ntrgn.viscosity = 0.4;
  ntrgn.explosiveness = 0;
  ntrgn.flammability = 0;
  ntrgn.heatCapacity = 1;
  ntrgn.effect = belowZero;