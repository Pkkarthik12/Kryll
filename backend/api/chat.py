from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.services.ai_service import ai_service

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
async def chat(request: ChatRequest):
    if not request.message:
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    
    try:
        response = await ai_service.get_response(request.message)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
