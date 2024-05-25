from rest_framework.decorators import api_view 
from rest_framework.response import Response 

@api_view()
def first_api_view(request):
  """
    A simple API view that returns a Hello World message.
    ---
    responses:
        200:
            description: A greeting to the world
            content:
                application/json:
                    schema:
                        type: object
                        properties:
                            message:
                                type: string
                                example: Hello, world!
  """
  return Response({"num_books": 1})
