# Build
FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY . .
RUN dotnet restore "back-end.csproj"
RUN dotnet publish "back-end.csproj" -c Release -o /publish

# Host
FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
EXPOSE 80
COPY --from=build /publish .
ENV ASPNETCORE_URLS=http://+:5000
ENTRYPOINT ["dotnet", "back-end.dll"]