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
	<body id="cv-body" style="max-width:800px;">
	<h2>My experiences</h2>

		<xsl:for-each select="cv/item">
			<table class="cv-item">
				<tr>
					<th class="cv-title">
						<xsl:value-of select="title"/>
					</th>
					<th class="cv-inst">
						<xsl:choose>
						<xsl:when test="inst/@url">
							<a href="{inst/@url}" target="_blank"><xsl:value-of select="inst"/></a>
						</xsl:when>
						<xsl:otherwise>
							<xsl:value-of select="inst"/>
						</xsl:otherwise>
						</xsl:choose>
					</th>
				</tr>
				<tr>
					<td class="cv-yrloc">When and where:</td>
					<td class="cv-yrloc">
						<xsl:choose>
						<xsl:when test="@qtrStart = @qtrEnd">
							<xsl:if test="substring(@qtrStart,3) = '1'">
								<span>Winter </span>
							</xsl:if>
							<xsl:if test="substring(@qtrStart,3) = '2'">
								<span>Spring </span>
							</xsl:if>
							<xsl:if test="substring(@qtrStart,3) = '3'">
								<span>Summer </span>
							</xsl:if>
							<xsl:if test="substring(@qtrStart,3) = '4'">
								<span>Autumn </span>
							</xsl:if>

							<span>20</span><xsl:value-of select="substring(@qtrStart,1,2)"/>
						</xsl:when>
						
						<xsl:otherwise>
							<xsl:if test="substring(@qtrStart,1,2) = substring(@qtrEnd,1,2) ">
								<xsl:if test="substring(@qtrStart,3) = '1'">
									<span>Winter </span>
								</xsl:if>
								<xsl:if test="substring(@qtrStart,3) = '2'">
									<span>Spring </span>
								</xsl:if>
								<xsl:if test="substring(@qtrStart,3) = '3'">
									<span>Summer </span>
								</xsl:if>
								<xsl:if test="substring(@qtrStart,3) = '4'">
									<span>Autumn </span>
								</xsl:if>
								
								<span>− </span>

								<xsl:if test="substring(@qtrEnd,3) = '1'">
									<span>Winter </span>
								</xsl:if>
								<xsl:if test="substring(@qtrEnd,3) = '2'">
									<span>Spring </span>
								</xsl:if>
								<xsl:if test="substring(@qtrEnd,3) = '3'">
									<span>Summer </span>
								</xsl:if>
								<xsl:if test="substring(@qtrEnd,3) = '4'">
									<span>Autumn </span>
								</xsl:if>

								<span>20</span><xsl:value-of select="substring(@qtrStart,1,2)"/>
							</xsl:if>

							<xsl:if test="substring(@qtrStart,1,2) != substring(@qtrEnd,1,2)">
								<span>20</span><xsl:value-of select="substring(@qtrStart,1,2)"/><span> − </span>
								<xsl:choose>
								<xsl:when test="string(number(substring(@qtrEnd,1,2))) != 'NaN'">
									<span>20</span><xsl:value-of select="substring(@qtrEnd,1,2)"/>
								</xsl:when>
								<xsl:otherwise>
									<xsl:value-of select="@qtrEnd"/>
								</xsl:otherwise>
								</xsl:choose>
							</xsl:if>
						</xsl:otherwise>
						</xsl:choose>
						<span>; </span><xsl:value-of select="@loc"/>
					</td>
				</tr>
				<tr>
					<td class="cv-descrip">Description:</td>
					<td class="cv-descrip"><xsl:copy-of select="descrip"/></td>
				</tr>
							
				<tr>
					<td class="cv-skills">Skills developed:</td>
					<td class="cv-skills"><xsl:copy-of select="skills"/></td>
				</tr>
			</table>
		</xsl:for-each>	
	</body>
	</html>
</xsl:template>

</xsl:stylesheet>
