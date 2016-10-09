<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html lang="en-us">
	<head>
		<base href="http://students.washington.edu/mjstyczi/"/>
		<link rel="stylesheet" href="supporting/styles.css"/>
		<title>Marshall Styczinski</title>
		<link rel="shortcut icon" href="logos/vectoricon.ico"/>
		<meta name="description" content="Personal web page for Marshall Styczinski: site map (text only)"/>
		<meta charset="UTF-8"/>
	</head>
	<body style="width:1024px;">
	<h1>Site map</h1>

		<xsl:for-each select="urlset/url">
			<table style="padding:15px; margin-bottom:20px;">
				<tr>
					<td style="padding:15px; background-color:#D5D5D5; width:300px;">
						<span>URL&#58; </span><a href="{loc}"><xsl:value-of select="loc"/></a>
					</td>
				</tr>
				<tr>
					<td style="padding:15px 15px 15px 25px; background-color:#EEEEEE; width:300px;">
						<span>Changes approximately&#58; </span><xsl:value-of select="changefreq"/><br/>						
						<span>Relative importance&#58; </span><xsl:value-of select="priority"/> out of 1.0
					</td>
				</tr>
			</table>
		</xsl:for-each>
	<hr style="margin-bottom:20px;"/>
	
	</body>
	</html>
</xsl:template>

</xsl:stylesheet>