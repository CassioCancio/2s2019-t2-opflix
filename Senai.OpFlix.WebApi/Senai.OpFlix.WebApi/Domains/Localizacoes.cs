using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Localizacoes
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("latitude")]
        [JsonRequired]
        public string Latitude { get; set; }

        [BsonElement("longitude")]
        [JsonRequired]
        public string Longitude { get; set; }

        public Midias Midia { get; set; }
    }
}
