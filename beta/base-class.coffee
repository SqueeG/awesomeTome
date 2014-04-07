### JSHint global vars ###
	### global $:false, jQuery:false, console:false ###
	### jshint expr:true ###

class trd
	constructor: (@name) ->
		default: [
			'classentry', 'quot'
			'b_preamble'
			# \begin{classpreamble}
			'desc', 'playingaclass', 'alignment', 'races', 'startinggold', 'hitdie', 'classskills', 'skillpoints',
			'e_preamble'
			# \end{classpreamble} , make preamble it's own object?
			'bab', 'for', 'ref', 'wil'
			# \begin{classtable}{}
			'b_classtable'
			'levelone', 'leveltwo', 'levelthree', 'levelfour', 'levelfive', 'levelsix', 'levelseven', 'leveleight', 'levelnine', 'levelten', 'leveleleven', 'leveltwelve', 'levelthirteen', 'levelfourteen', 'levelfifteen', 'levelsixteen', 'levelseventeen', 'leveleighteen', 'levelnineteen', 'leveltwenty',
			'e_classtable'
		]

		data: {}

		setdefault = ->
			filter = { "preamble": 1, "classtable": 1 }

			x = trd["default"]
			y = trd.data
			s = undefined
			i = 0

			while i < x.length
				s = x[i].slice(2)
				if filter[s]
					(if (filter[s] is 1) then y[x[i]] = "\\begin{" + s + "}" else y[x[i]] = "\\end{" + s + "}")
					y[x[i]] += "{}"  if (filter[s] is "classtable") and (filter[s] is 1)
					filter[s]++
				else
					trd.data[x[i]] = ""
				i++
			return

	input: (k, v, t) -> #key, value, type
		#console.log( "input -- k: "+k+" v: "+v+" t: "+t );
		if v and v isnt ""
			filter = {"addcol": 1} #don't act on these IDs
			return  if filter[k]

			trd.sanitize v # convert all the quotes and double quotes to html special characters

			(if (t) then trd.data[k]["\\" + k + "{ " + v + " }"] else trd.data[k]["\\" + v + ""]) #classfeature will need to send 'v' fully formed -> classfeature{xx}{xxx}
		else
			trd.data[k] = ""
		trd.init()
		return

	setData: -> #sets the default data into the data obj
		out = ""
		i = 0

		while i < trd["default"].length
			obj = trd.data[trd["default"][i]]
			console.log "o: " + obj
			if obj
				trd.feature.init()  if obj is "classfeature"
				out += obj + "\n"
			console.log "out " + out
			return out
			i++
		return

	init: ->
		out = trd.setData()
		trd.nullClick()
		output out
		return



###
----------------------------
	Wire up the page
----------------------------
###

$('input').on('keyup', (e) ->
	trd.input( $(this).attr('id'), this.value, 1 )
)

trd.setdefault()	# Set the default values
