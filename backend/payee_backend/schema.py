import graphene

class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Welcome to Payee API 👋")

schema = graphene.Schema(query=Query)
