@echo off
title VELVET ^& PULSE - Luxury Sexual Wellness
cls
echo ====================================================================
echo   VELVET ^& PULSE - Modern Sexual Wellness ^& Intimate Storefront
echo ====================================================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python detected. Launching local web server...
    echo.
    python server.py
    goto end
)

where py >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python (py launcher) detected. Launching local web server...
    echo.
    py server.py
    goto end
)

echo [INFO] Python command not found in system PATH.
echo [INFO] Opening storefront directly in your default web browser...
start "" "index.html"
echo.
echo Storefront successfully launched in your browser!
echo.

:end
echo.
echo Press any key to close this console window...
pause >nul

