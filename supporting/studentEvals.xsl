<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
	<html lang="en-us">
	<head>
		<base href="http://students.washington.edu/mjstyczi/" />
		<link rel="stylesheet" href="supporting/styles.css" />
		<title>Marshall Styczinski</title>
		<link rel="shortcut icon" href="logos/vectoricon.ico" />
		<meta name="description" content="Personal web page for Marshall Styczinski: student evaluation comments (data)" />
		<meta charset="UTF-8" />
	</head>
	<body style="width:1024px;">
	<h2>Selected student comments from course evaluations</h2>

		<xsl:for-each select="studentEvals/excerpt">
			<table style="padding:15px; margin-bottom:20px; width:95%;">
				<caption>
					<span style="font-weight:bold;">Quarter: </span>
						<xsl:if test="substring(@qtr,3) = '1'">
							<span>Winter </span>
						</xsl:if>
						<xsl:if test="substring(@qtr,3) = '2'">
							<span>Spring </span>
						</xsl:if>
						<xsl:if test="substring(@qtr,3) = '3'">
							<span>Summer </span>
						</xsl:if>
						<xsl:if test="substring(@qtr,3) = '4'">
							<span>Autumn </span>
						</xsl:if>
					<span>20</span><xsl:value-of select="substring(@qtr,1,2)"/>
					<br/>
					
					<span style="font-weight:bold;">Section type: </span>
						<xsl:choose>
							<xsl:when test="@crs = 'tut'">
								<span>tutorial</span>
							</xsl:when>
							<xsl:when test="@crs = 'dl'">
								<span>discussion-lab</span>
							</xsl:when>
							<xsl:otherwise>
								<span>laboratory</span>
							</xsl:otherwise>
						</xsl:choose>
					<br/>
					<span style="font-weight:bold;">Eval. type: </span><xsl:value-of select="@typ"/>
				</caption>			
				<tr>
					<td style="padding:15px; background-color:#DDDDDD; width:300px;"><xsl:value-of select="question"/></td>
					<td style="padding:15px;"><xsl:value-of select="response"/></td>
				</tr>
			</table>
		</xsl:for-each>
	<hr style="margin-bottom:20px;" />
	
	</body>
	</html>
</xsl:template>

</xsl:stylesheet>