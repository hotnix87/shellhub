package main

type DeviceInfo struct {
	ID         string `json:"id"`
	PrettyName string `json:"pretty_name"`
	Version    string `json:"version"`
}

type AuthRequest struct {
	Identity  *DeviceIdentity `json:"identity"`
	Info      *DeviceInfo     `json:"info"`
	PublicKey string          `json:"public_key"`
	TenantID  string          `json:"tenant_id"`
	Sessions  []string        `json:"sessions,omitempty"`
}

type AuthResponse struct {
	UID       string `json:"uid"`
	Token     string `json:"token"`
	Name      string `json:"name"`
	Namespace string `json: "namespace"`
}
