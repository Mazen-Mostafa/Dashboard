<%
Response.ContentType = "application/json"

Response.Write("{""time"":""" & Now() & """}")
%>