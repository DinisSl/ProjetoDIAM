# Configuração do Projeto

## 1ª Vez (Configuração Inicial)

### Frontend
```bash
cd frontend
npm install
npm install bootstrap reactstrap axios moment --save
```

### Backend
```bash
cd ../backend
python -m venv .venv
```

**Ativar o ambiente virtual** (escolher o que funcionar):
- **cmd:** `.venv\Scripts\activate.bat`
- **PowerShell:** `.venv\Scripts\Activate.ps1`
```bash
pip install -r requirements.txt
```

---

## Correr o Projeto (Uso Diário)

Abrir dois terminais independentes:

### Terminal 1 (Backend)
```bash
cd backend
.venv\Scripts\activate.bat  # ou Activate.ps1
python manage.py runserver
```

### Terminal 2 (Frontend)
```bash
cd frontend
npm run dev
```