<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html lang="en-us">
	<head>
		<base href="http://students.washington.edu/mjstyczi/" />
		<link rel="stylesheet" href="supporting/styles.css" />
		<title>Marshall Styczinski</title>
		<link rel="shortcut icon" href="logos/vectoricon.ico" />
		<meta name="description" content="Personal web page for Marshall Styczinski: experience page (data)" />
		<meta charset="UTF-8" />
	</head>
	<body style="width:1024px;">
	<h2>My experiences (newest first)</h2>

		<xsl:for-each select="cv/item">
			<table style="padding:15px; margin-bottom:20px; width:95%;">
				<caption class="cv-item">
					<xsl:value-of select="title"/>
				</caption>			
				<tr>
					<td style="padding:15px; background-color:#DDDDDD;"></td>
					<td style="padding:15px;"><xsl:value-of select="descrip"/></td>
				</tr>
			</table>
		</xsl:for-each>
	<hr style="margin-bottom:20px;" />
	
	</body>
	</html>
</xsl:template>

</xsl:stylesheet>