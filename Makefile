SOURCES = 
	SOURCES = advcombat.tex \
	alignment.tex \
	alt.traits.tex \
	armor.tex \
	backgrounds.tex \
	baseclass.tex \
	bookofgears.tex \
	cover.tex \
	dungeonsofnote.tex \
	dungeons.tex \
	economics.tex \
	entire.tex \
	feats.tex \
	FiendClasses.tex \
	fiendfeats.tex \
	fiendishrules.tex \
	fiendishtaint.tex \
	fiendspheres.tex \
	highadventure.tex \
	logistics.tex \
	magic.tex \
	masscombat.tex \
	multiclassing.tex \
	necrointro.tex \
	necromancerfeats.tex \
	necromaticlocations.tex \
	necromaticspells.tex \
	oddraces.tex \
	prcintro.tex \
	RoWintro.tex \
	ruleinhell.tex \
	social.tex \
	total.tex \
	undeadmonsters.tex \
	undead.tex \
	underdark.tex \
	weapons.tex \
	worldwar.tex \
	wrapper.tex \
	writings.tex \
	baseclasses/adept.tex \
	baseclasses/assassin.tex \
	baseclasses/barbarian.tex \
	baseclasses/conduit.tex \
	baseclasses/elementalist.tex \
	baseclasses/fiendishbrute.tex \
	baseclasses/fighter.tex \
	baseclasses/firemage.tex \
	baseclasses/genie.tex \
	baseclasses/jester.tex \
	baseclasses/knight.tex \
	baseclasses/marshal.tex \
	baseclasses/monk.tex \
	baseclasses/samurai.tex \
	baseclasses/summoner.tex \
	baseclasses/thiefacrobat.tex \
	baseclasses/truefiend.tex \
	baseclasses/warrior.tex \
	community/feats/skillfeats.tex \
	community/feats/combatfeats.tex \
	community/skillproblems.tex \
	community/classes/curator.tex \
	community/classes/kantianpaladin.tex \
	community/classes/masterofwrath.tex \
	community/classes/ranger.tex \
	community/classes/shadowwarrior.tex \
	community/classes/spherelock.tex \
	community/prestige/arcanearcher.tex \
	community/prestige/berzerker.tex \
	community/prestige/bignob.tex \
	community/prestige/bladefighter.tex \
	community/prestige/bladesinger.tex \
	community/prestige/disciplespiritwave.tex \
	community/prestige/dragondisciple.tex \
	community/prestige/drunkenmaster.tex \
	community/prestige/eldritchknight.tex \
	community/prestige/gentlemonk.tex \
	community/prestige/invisibleblade.tex \
	community/prestige/meteorninja.tex \
	community/prestige/ogremage.tex \
	community/prestige/tigermonk.tex \
	monsters/simulacrum.tex \
	prestige/barrister.tex \
	prestige/boatman.tex \
	prestige/bonebladereaper_revised.tex \
	prestige/bonebladereaper.tex \
	prestige/bonerider.tex \
	prestige/celestialbeacon.tex \
	prestige/corpselight.tex \
	prestige/deathking.tex \
	prestige/deathknight.tex \
	prestige/defiler.tex \
	prestige/demonsamurai.tex \
	prestige/dragonlancer.tex \
	prestige/dungeonveteran.tex \
	prestige/ghoulparagon.tex \
	prestige/heartlessmage.tex \
	prestige/hellwalker.tex \
	prestige/initiateofblacktower.tex \
	prestige/legendarystrategist.tex \
	prestige/lorddamned.tex \
	prestige/lurker.tex \
	prestige/masterofnecromanticmysteries.tex \
	prestige/masterofsnakemountain.tex \
	prestige/monitor.tex \
	prestige/ninjaofgax.tex \
	prestige/progenitor.tex \
	prestige/pumpkinking.tex \
	prestige/seekerofthelosttraditions.tex \
	prestige/seeroftempest.tex \
	prestige/skindancer.tex \
	prestige/soulmerchant.tex \
	prestige/speakerfordead.tex \
	prestige/strangerwithburningeyes.tex \
	prestige/swordwraithparagon.tex \
	prestige/thiefofsouls.tex \
	prestige/uttercold.tex \
	prestige/vampireparagon.tex \
	prestige/widowqueen.tex

	
all: entire.pdf

entire.pdf: $(SOURCES)
	# Needs 3 passes to get everything correct.
	pdflatex entire.tex
	pdflatex entire.tex
	pdflatex entire.tex

clean:
	rm -f entire.aux entire.log entire.out entire.pdf entire.toc

.PHONY: clean

complete:
	make clean && make && cp ./entire.pdf ./Tome061beta.pdf && make clean
