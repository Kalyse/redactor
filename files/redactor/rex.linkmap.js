
$ = jQuery;

// insert link
function redactor_insertLink(link, name)
{
	// Linktext aus Linkmap �bernehmen
	linktext = $.trim(name);
	
	// Linktitel ausgeben
	title = '';
	if (window.opener.actualredactor.opts.rex_linktitle == true)
	{
		title = ' title="' + name + '"';
	}
	
	// Linktext �bernehmen wenn Text markiert ist
	var seltext = window.opener.actualredactor.getSelection();
	seltext = $.trim(seltext);
	if (seltext != '')
	{
		linktext = seltext;
	}
	
	// Link einf�gen
	html = '<a href="' + link + '"' + title + '>' + linktext + '</a>';
	window.opener.actualredactor.insertHtml(html);

	window.close();
}
