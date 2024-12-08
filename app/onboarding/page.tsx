"use client";

import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/reusable/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const showModal = (title: string, message: string, type: "success" | "error") => {
    setModalTitle(title);
    setModalMessage(message);
    setModalType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const RegisterUser = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('User registered:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); // Handle empty body
        throw new Error(errorData.error || 'Failed to login');
      }

      const data = await response.json();
      console.log('Login successful:', data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 md:p-8">
      <Card className="w-full max-w-md bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary text-[#25a3d8]">
            Welcome to Emporium
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" onValueChange={(value) => setIsLogin(value === "login")}>
            <TabsList className="grid w-full grid-cols-2 bg-[#f5f5f5]">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent the form from reloading the page
                  loginUser(email, password); // Use the state values for email and password
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#25a3d8]">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#25a3d8]">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="bg-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full text-white bg-[#25a3d8]">
                  Login
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent the form from reloading the page
                  if (password !== confirmPassword) {
                    showModal("Error", "Passwords do not match", "error");
                    return;
                  }
                  RegisterUser(email, password); // Use the state values for email and password
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-[#25a3d8]">Email Address</Label>
                  <Input
                    id="register-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-[#25a3d8]">Password</Label>
                  <Input
                    id="register-password"
                    type="password"
                    required
                    placeholder="Create a password"
                    className="bg-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-[#25a3d8]">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    placeholder="Confirm your password"
                    className="bg-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full text-white bg-[#25a3d8]">
                  Register
                </Button>
              </form>
            </TabsContent>

          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link href="/forgot-password" className="text-sm text-primary hover:underline text-[#25a3d8]">
            Forgot Password?
          </Link>
          <p className="text-sm text-muted-foreground text-[#25a3d8]">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>

      {/* Modal Component */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        message={modalMessage}
        type={modalType}
      />
    </main>
  );
}