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
			<table class="cv-item">
				<tr>
					<th class="cv-title">
						<xsl:value-of select="title"/>
					</th>
					<th class="cv-yrloc">
						<xsl:if test="substring(@yrqtr,3) = '1'">
							<span>Winter </span>
						</xsl:if>
						<xsl:if test="substring(@yrqtr,3) = '2'">
							<span>Spring </span>
						</xsl:if>
						<xsl:if test="substring(@yrqtr,3) = '3'">
							<span>Summer </span>
						</xsl:if>
						<xsl:if test="substring(@yrqtr,3) = '4'">
							<span>Autumn </span>
						</xsl:if>
						<span>20</span><xsl:value-of select="substring(@yrqtr,1,2)"/>, <xsl:value-of select="@loc"/>
					</th>
				</tr>
				<tr>
					<td class="cv-descrip">Description:</td>
					<td class="cv-descrip"><xsl:value-of select="descrip"/></td>
				</tr>
							
				<tr>
					<td class="cv-skills">Skills developed:</td>
					<td class="cv-skills"><xsl:value-of select="skills"/></td>
				</tr>
			</table>
		</xsl:for-each>
	<hr style="margin-bottom:20px;" />
	
	</body>
	</html>
</xsl:template>

</xsl:stylesheet>
