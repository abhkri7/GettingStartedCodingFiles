var tabs = ["App.cpp",`
#include "App.h"
#include "MainFrame.h"
#include "wx/wx.h"
wxIMPLEMENT_APP(App);
bool App::OnInit() {
  MainFrame* mainFrame = new MainFrame("C++ GUI");
	mainFrame->SetClientSize(800, 600);
	mainFrame->Center();
	mainFrame->Show();
	return true;
}
`,
"App.h",`
#pragma once
#include "wx/wx.h"
class App: public wxApp
{
	bool OnInit();
};
`,
"MainFrame.cpp",`
#include "MainFrame.h"
#include "wx/wx.h"
MainFrame::MainFrame(const wxString& title) : wxFrame(nullptr, wxID_ANY, title ) {
	// All application work here
}
`,
"MainFrame.h" , `#pragma once
#include "wx\\wx.h"
class MainFrame : public wxFrame
{
public:
	MainFrame(const wxString& title);
private:
};
`];
