---
path: "/blog/look-up-country-by-ip-dotnet-core"
date: "2018-08-04"
title: "Look up country by IP Address with ASP.NET Core"
tags: ["Development", "CSharp", "Web", "ASP.NET Core"]
---

As a training exercise I referenced https://github.com/karan/Projects and started a project to create a web service to look up the country from an IP address with .NET Core. I used the DB-IP downloadable CSV for IP ranges and the associated countries. The code took a single night to write and consists of only a couple functions to process the table and return the country.

I Parse the CSV and do an inline comparison with the submitted IP and the ranges in each row of the CSV with Linq syntax.
```csharp
var uintaddress = ConvertIPToUint(address);
                var lines = System.IO.File.ReadAllLines(Path.Combine(projectRootFolder, "wwwroot/assets/dbip-country-2018-07.csv")).Select(a => a.Split(';'));
                var csv = from line in lines
                          select (line[0].Replace("\"", "").Split(',')).ToArray();
                var code = from range in csv
                           where ConvertIPToUint(range[0]) <= uintaddress && ConvertIPToUint(range[1]) >= uintaddress
                           select (range[2]);
                IP.CountryCode = code.First().Replace("\"", "");
```

Each comparison is performed by calculating an integer to represent each IP address and comparing them to a precalculated integer for the input value. The integer is calculated by the function below.
```csharp
static public uint ConvertIPToUint(string ipAddress)
        {
            System.Net.IPAddress iPAddress = System.Net.IPAddress.Parse(ipAddress);
            byte[] byteIP = iPAddress.GetAddressBytes();
            uint ipInUint = (uint)byteIP[0] * (256 * 256 * 256);
            ipInUint += (uint) byteIP[1] * (256 * 256);
            ipInUint += (uint) byteIP[2] * 256;
            ipInUint += (uint) byteIP[3];
            return ipInUint;
        }
```
It takes only 150ms on average to parse all 672,917 rows in the CSV and return the country.

The Web UI is a simple submission box with input validation both server and client side. You can see it on the demo below and the source is published to GitHub.

Live Demo
https://countryiplookup.azurewebsites.net

Full Source Code
https://github.com/eingland/CountryIPLookup